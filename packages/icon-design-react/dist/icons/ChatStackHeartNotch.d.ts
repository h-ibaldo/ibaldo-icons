import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackHeartNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackHeartNotch: ForwardRefExoticComponent<ChatStackHeartNotchProps & RefAttributes<SVGSVGElement>>;

export default ChatStackHeartNotch;
export { ChatStackHeartNotch };
