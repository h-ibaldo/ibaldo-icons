import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackLaughBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackLaughBoxy: ForwardRefExoticComponent<ChatStackLaughBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatStackLaughBoxy;
export { ChatStackLaughBoxy };
