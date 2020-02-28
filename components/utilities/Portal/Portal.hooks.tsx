import {isDocumentDefined} from '~components/utilities/DetectBrowser/DetectBrowser';
import classNames from 'classnames';
import {useEffect} from 'react';

/** Creates a wrapper div and appends it as a child to body.
 * @return {HTMLElement} - Returns the HTML element to be used in a React Portal.
 */
export function usePortal(className?: string): HTMLElement | null {
  const root = isDocumentDefined() ? document.createElement('div') : null;

  useEffect(() => {
    if (root) {
      const portalClasses = classNames(
        {
          'uic--portal-container': true,
        },
        className,
      );

      root.classList.add(...portalClasses.split(' '));
      document.body.appendChild(root);

      return function cleanup(): void {
        document.body.removeChild(root);
      };
    }
  }, []);

  return root;
}
