import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackXFacingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackXFacing: ForwardRefExoticComponent<ChatStackXFacingProps & RefAttributes<SVGSVGElement>>;

export default ChatStackXFacing;
export { ChatStackXFacing };
