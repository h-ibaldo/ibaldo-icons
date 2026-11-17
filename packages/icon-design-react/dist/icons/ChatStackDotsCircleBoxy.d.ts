import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackDotsCircleBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackDotsCircleBoxy: ForwardRefExoticComponent<ChatStackDotsCircleBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatStackDotsCircleBoxy;
export { ChatStackDotsCircleBoxy };
