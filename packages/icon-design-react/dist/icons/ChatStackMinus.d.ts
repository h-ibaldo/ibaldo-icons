import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackMinus: ForwardRefExoticComponent<ChatStackMinusProps & RefAttributes<SVGSVGElement>>;

export default ChatStackMinus;
export { ChatStackMinus };
