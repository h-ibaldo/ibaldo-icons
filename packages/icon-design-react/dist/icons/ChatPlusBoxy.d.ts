import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatPlusBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatPlusBoxy: ForwardRefExoticComponent<ChatPlusBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatPlusBoxy;
export { ChatPlusBoxy };
