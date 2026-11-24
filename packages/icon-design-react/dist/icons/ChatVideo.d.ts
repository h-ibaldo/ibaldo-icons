import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatVideoProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatVideo: ForwardRefExoticComponent<ChatVideoProps & RefAttributes<SVGSVGElement>>;

export default ChatVideo;
export { ChatVideo };
