import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackWarningFacingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackWarningFacing: ForwardRefExoticComponent<ChatStackWarningFacingProps & RefAttributes<SVGSVGElement>>;

export default ChatStackWarningFacing;
export { ChatStackWarningFacing };
