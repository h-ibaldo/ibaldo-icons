import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TranslateChatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TranslateChat: ForwardRefExoticComponent<TranslateChatProps & RefAttributes<SVGSVGElement>>;

export default TranslateChat;
export { TranslateChat };
