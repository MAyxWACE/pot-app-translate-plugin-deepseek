function generateSystemPrompt(intensity, to) {
    const level = parseInt(intensity) || 2;
    
    let prompt = `You are a professional translation assistant. First, automatically identify the type of input content (single word, phrase, sentence, or paragraph), then provide the corresponding translation result according to the following rules.

Important rules:
- Output language must be Chinese (except for the original English content)
- Always translate into target language: ${to}
- DO NOT use any Markdown formatting: no #, *, -, **, or other special formatting characters
- Output must be plain text only
- For single words or phrases: ALWAYS put the original word/phrase at the TOP of the output, followed by a blank line

`;

    if (level === 1) {
        prompt += `等级1 - 基础翻译
For ALL input types (word, phrase, sentence, paragraph):
Output ONLY the translation result directly
No explanations, no examples, no additional information
Keep translation accurate and concise`;
    } else {
        prompt += `1. If the input is a SINGLE WORD:\n`;
        prompt += `First line: [original word]\n\n`;
        prompt += `释义：\n`;
        prompt += `[词性1]: [中文释义1]\n`;
        prompt += `[词性2]: [中文释义2]\n`;
        prompt += `...\n\n`;
        
        if (level >= 2) {
            prompt += `变形：\n`;
            prompt += `动词（如适用）: 过去式: [形式], 过去分词: [形式], 现在分词: [形式]\n`;
            prompt += `名词（如适用）: 复数: [形式]\n`;
            prompt += `形容词/副词（如适用）: 比较级: [形式], 最高级: [形式]\n\n`;
        }
        
        if (level >= 3) {
            prompt += `同根词：\n`;
            for (let i = 1; i <= 4; i++) {
                prompt += `${i}. [单词${i}] ([词性]): [中文释义]\n`;
            }
            prompt += `5. [单词5] ([词性]): [中文释义]\n\n`;
        }
        
        if (level >= 4) {
            prompt += `常用搭配：\n`;
            for (let i = 1; i <= 5; i++) {
                prompt += `${i}. [英文词组${i}] — [中文翻译]\n`;
            }
            prompt += `\n`;
        }
        
        let exampleCount = level === 2 ? 1 : (level === 3 ? 2 : 3);
        if (exampleCount > 0) {
            prompt += `例句：\n`;
            for (let i = 1; i <= exampleCount; i++) {
                prompt += `${i}. [英文例句${i}]\n   翻译：[中文翻译${i}]\n`;
            }
        }
        
        prompt += `\n\n`;
        prompt += `2. If the input is a PHRASE:\n`;
        prompt += `First line: [original phrase]\n\n`;
        prompt += `释义：\n`;
        prompt += `1. [中文释义1]\n`;
        prompt += `2. [中文释义2]\n`;
        prompt += `...\n\n`;
        
        if (level >= 2) {
            let phraseExampleCount = level >= 3 ? (level === 4 ? 3 : 2) : 0;
            if (phraseExampleCount > 0) {
                prompt += `例句：\n`;
                for (let i = 1; i <= phraseExampleCount; i++) {
                    prompt += `${i}. [英文例句${i}]\n   翻译：[中文翻译${i}]\n`;
                }
            }
        }
        
        prompt += `\n\n`;
        prompt += `3. If the input is a SENTENCE or PARAGRAPH:\n`;
        prompt += `Directly provide accurate, fluent translation\n`;
        prompt += `Keep the translation colloquial, professional, and elegant, avoiding machine translation style\n`;
        prompt += `Strictly translate only the text content, do not interpret, comment or expand\n`;
        prompt += `Output ONLY the translation result`;
    }
    
    return prompt;
}

async function translate(text, from, to, options) {
    const { config, utils } = options;
    const { tauriFetch: fetch } = utils;
    
    let { apiKey, model = "deepseek-v4-flash", intensity = "2" } = config;
    
    const requestPath = "https://api.deepseek.com/chat/completions";
    
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    }
    
    const systemPrompt = generateSystemPrompt(intensity, to);
    
    const maxTokensByLevel = {
        "1": 1000,
        "2": 2000,
        "3": 3000,
        "4": 4000
    };
    
    const body = {
        model: model,
        messages: [
            {
                "role": "system",
                "content": systemPrompt
            },
            {
                "role": "user",
                "content": text
            }
        ],
        temperature: 0.1,
        top_p: 0.99,
        frequency_penalty: 0,
        presence_penalty: 0,
        max_tokens: maxTokensByLevel[intensity] || 2000
    }
    
    let res = await fetch(requestPath, {
        method: 'POST',
        url: requestPath,
        headers: headers,
        body: {
            type: "Json",
            payload: body
        }
    });
    
    if (res.ok) {
        let result = res.data;
        return result.choices[0].message.content.trim().replace(/^"|"$/g, '');
    } else {
        throw `Http Request Error\nHttp Status: ${res.status}\n${JSON.stringify(res.data)}`;
    }
}
