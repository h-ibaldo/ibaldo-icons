import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatPlusCircleBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatPlusCircleBoxy: ForwardRefExoticComponent<ChatPlusCircleBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatPlusCircleBoxy;
export { ChatPlusCircleBoxy };
