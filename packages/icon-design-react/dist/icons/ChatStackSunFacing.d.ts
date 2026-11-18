import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackSunFacingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackSunFacing: ForwardRefExoticComponent<ChatStackSunFacingProps & RefAttributes<SVGSVGElement>>;

export default ChatStackSunFacing;
export { ChatStackSunFacing };
