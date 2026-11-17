import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TranslationArrowsSpeechProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TranslationArrowsSpeech: ForwardRefExoticComponent<TranslationArrowsSpeechProps & RefAttributes<SVGSVGElement>>;

export default TranslationArrowsSpeech;
export { TranslationArrowsSpeech };
