import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackPlusNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackPlusNotch: ForwardRefExoticComponent<ChatStackPlusNotchProps & RefAttributes<SVGSVGElement>>;

export default ChatStackPlusNotch;
export { ChatStackPlusNotch };
