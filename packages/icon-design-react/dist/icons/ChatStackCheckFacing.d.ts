import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackCheckFacingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackCheckFacing: ForwardRefExoticComponent<ChatStackCheckFacingProps & RefAttributes<SVGSVGElement>>;

export default ChatStackCheckFacing;
export { ChatStackCheckFacing };
