import { OPENAI_API_KEY } from '$env/static/private';
import { error } from '@sveltejs/kit';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: OPENAI_API_KEY
});

export const actions = {
    default: async ({ request }) => {
        try {
            if (!OPENAI_API_KEY) {
                throw error(500, 'OpenAI API key is not configured');
            }

            const data = await request.formData();
            const prompt = data.get('prompt');

            if (!prompt) {
                throw error(400, 'Prompt is required');
            }

            // Create a prompt that will generate SVG code in the icon.design style
            const enhancedPrompt = 'Create an SVG icon based on this description: "' + prompt + '"\n\n' +
                'The SVG should follow these exact specifications:\n' +
                '- Viewbox should be "0 0 24 24"\n' +
                '- Use only <path> elements with "stroke" attribute (no fill)\n' +
                '- Stroke color should be "currentColor"\n' +
                '- Stroke-width should be "2"\n' +
                '- Stroke-linecap and stroke-linejoin should be "round"\n' +
                '- No gradients, patterns, or complex effects\n' +
                '- Minimalist, clean design with simple shapes\n' +
                '- Professional look suitable for UI/UX\n' +
                '- Match this example format:\n' +
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n' +
                '  <defs><style>.a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:2;}</style></defs>\n' +
                '  <path class="a" d="..."/>\n' +
                '</svg>\n\n' +
                'Respond only with the SVG code, nothing else.';

            console.log('Calling OpenAI API...');
            
            // Call OpenAI API with GPT-4
            const completion = await openai.chat.completions.create({
                model: "gpt-4",
                messages: [
                    {
                        role: "system",
                        content: "You are an expert SVG icon designer. Generate only SVG code, no explanations."
                    },
                    {
                        role: "user",
                        content: enhancedPrompt
                    }
                ],
                temperature: 0.7,
                max_tokens: 500
            });

            console.log('OpenAI API response received');
            
            const svgCode = completion.choices[0].message.content.trim();

            // Basic validation of SVG output
            if (!svgCode.startsWith('<svg') || !svgCode.endsWith('</svg>')) {
                console.error('Invalid SVG generated:', svgCode);
                throw error(500, 'Invalid SVG generated');
            }

            return {
                svgCode
            };
        } catch (err) {
            console.error('Error generating icon:', err);
            // Return more detailed error information
            throw error(500, {
                message: err.message || 'Failed to generate icon',
                details: err.toString()
            });
        }
    }
}; 
