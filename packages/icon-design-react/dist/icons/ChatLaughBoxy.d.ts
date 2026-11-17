import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatLaughBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatLaughBoxy: ForwardRefExoticComponent<ChatLaughBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatLaughBoxy;
export { ChatLaughBoxy };
