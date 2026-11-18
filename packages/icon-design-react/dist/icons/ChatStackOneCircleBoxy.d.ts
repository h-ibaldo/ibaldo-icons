import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackOneCircleBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackOneCircleBoxy: ForwardRefExoticComponent<ChatStackOneCircleBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatStackOneCircleBoxy;
export { ChatStackOneCircleBoxy };
