import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackImageCornerFacingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackImageCornerFacing: ForwardRefExoticComponent<ChatStackImageCornerFacingProps & RefAttributes<SVGSVGElement>>;

export default ChatStackImageCornerFacing;
export { ChatStackImageCornerFacing };
