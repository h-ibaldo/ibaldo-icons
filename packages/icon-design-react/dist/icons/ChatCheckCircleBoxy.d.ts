import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatCheckCircleBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatCheckCircleBoxy: ForwardRefExoticComponent<ChatCheckCircleBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatCheckCircleBoxy;
export { ChatCheckCircleBoxy };
