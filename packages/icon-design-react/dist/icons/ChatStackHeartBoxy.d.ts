import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackHeartBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackHeartBoxy: ForwardRefExoticComponent<ChatStackHeartBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatStackHeartBoxy;
export { ChatStackHeartBoxy };
