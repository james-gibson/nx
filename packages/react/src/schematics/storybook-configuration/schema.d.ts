import { Linter } from '@nrwl/workspace';

export interface StorybookConfigureSchema {
  name: string;
  configureCypress: boolean;
  js?: boolean;
  linter?: Linter;
}
