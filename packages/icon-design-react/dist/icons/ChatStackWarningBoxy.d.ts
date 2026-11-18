import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackWarningBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackWarningBoxy: ForwardRefExoticComponent<ChatStackWarningBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatStackWarningBoxy;
export { ChatStackWarningBoxy };
