import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackMinusCornerNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackMinusCornerNotch: ForwardRefExoticComponent<ChatStackMinusCornerNotchProps & RefAttributes<SVGSVGElement>>;

export default ChatStackMinusCornerNotch;
export { ChatStackMinusCornerNotch };
