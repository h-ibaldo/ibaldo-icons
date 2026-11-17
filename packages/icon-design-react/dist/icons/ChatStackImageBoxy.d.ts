import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackImageBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackImageBoxy: ForwardRefExoticComponent<ChatStackImageBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatStackImageBoxy;
export { ChatStackImageBoxy };
