import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatLaughProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatLaugh: ForwardRefExoticComponent<ChatLaughProps & RefAttributes<SVGSVGElement>>;

export default ChatLaugh;
export { ChatLaugh };
