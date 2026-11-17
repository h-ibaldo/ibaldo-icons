import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatCheckDoubleSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatCheckDoubleSlant: ForwardRefExoticComponent<ChatCheckDoubleSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatCheckDoubleSlant;
export { ChatCheckDoubleSlant };
