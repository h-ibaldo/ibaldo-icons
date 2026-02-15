import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LanguageSpeechBubbleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LanguageSpeechBubble: ForwardRefExoticComponent<LanguageSpeechBubbleProps & RefAttributes<SVGSVGElement>>;

export default LanguageSpeechBubble;
export { LanguageSpeechBubble };
