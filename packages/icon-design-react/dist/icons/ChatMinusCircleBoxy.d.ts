import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatMinusCircleBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatMinusCircleBoxy: ForwardRefExoticComponent<ChatMinusCircleBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatMinusCircleBoxy;
export { ChatMinusCircleBoxy };
