import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackDotsBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackDotsBoxy: ForwardRefExoticComponent<ChatStackDotsBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatStackDotsBoxy;
export { ChatStackDotsBoxy };
