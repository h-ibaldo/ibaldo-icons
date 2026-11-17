import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatOneCircleBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatOneCircleBoxy: ForwardRefExoticComponent<ChatOneCircleBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatOneCircleBoxy;
export { ChatOneCircleBoxy };
