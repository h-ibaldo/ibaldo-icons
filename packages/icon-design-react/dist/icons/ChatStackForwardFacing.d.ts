import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackForwardFacingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackForwardFacing: ForwardRefExoticComponent<ChatStackForwardFacingProps & RefAttributes<SVGSVGElement>>;

export default ChatStackForwardFacing;
export { ChatStackForwardFacing };
