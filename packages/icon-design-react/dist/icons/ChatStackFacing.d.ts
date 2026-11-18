import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackFacingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackFacing: ForwardRefExoticComponent<ChatStackFacingProps & RefAttributes<SVGSVGElement>>;

export default ChatStackFacing;
export { ChatStackFacing };
