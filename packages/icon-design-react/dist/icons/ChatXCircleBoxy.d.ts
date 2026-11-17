import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatXCircleBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatXCircleBoxy: ForwardRefExoticComponent<ChatXCircleBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatXCircleBoxy;
export { ChatXCircleBoxy };
