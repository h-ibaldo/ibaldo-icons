import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Chat: ForwardRefExoticComponent<ChatProps & RefAttributes<SVGSVGElement>>;

export default Chat;
export { Chat };
