import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatEditBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatEditBoxy: ForwardRefExoticComponent<ChatEditBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatEditBoxy;
export { ChatEditBoxy };
