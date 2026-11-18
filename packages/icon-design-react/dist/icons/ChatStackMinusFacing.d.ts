import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackMinusFacingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackMinusFacing: ForwardRefExoticComponent<ChatStackMinusFacingProps & RefAttributes<SVGSVGElement>>;

export default ChatStackMinusFacing;
export { ChatStackMinusFacing };
