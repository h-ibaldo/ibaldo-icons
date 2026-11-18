import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackTextFacingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackTextFacing: ForwardRefExoticComponent<ChatStackTextFacingProps & RefAttributes<SVGSVGElement>>;

export default ChatStackTextFacing;
export { ChatStackTextFacing };
