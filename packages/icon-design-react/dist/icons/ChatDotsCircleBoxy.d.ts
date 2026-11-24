import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotsCircleBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotsCircleBoxy: ForwardRefExoticComponent<ChatDotsCircleBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatDotsCircleBoxy;
export { ChatDotsCircleBoxy };
