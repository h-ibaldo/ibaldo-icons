import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackEditFacingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackEditFacing: ForwardRefExoticComponent<ChatStackEditFacingProps & RefAttributes<SVGSVGElement>>;

export default ChatStackEditFacing;
export { ChatStackEditFacing };
