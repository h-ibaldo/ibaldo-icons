import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatInfoBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatInfoBoxy: ForwardRefExoticComponent<ChatInfoBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatInfoBoxy;
export { ChatInfoBoxy };
