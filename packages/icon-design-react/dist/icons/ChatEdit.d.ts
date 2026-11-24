import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatEditProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatEdit: ForwardRefExoticComponent<ChatEditProps & RefAttributes<SVGSVGElement>>;

export default ChatEdit;
export { ChatEdit };
