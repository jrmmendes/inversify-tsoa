import YAML from 'yamljs';
import { Router } from 'express';
import { serve, setup } from 'swagger-ui-express';
import { join } from 'path';

type SwaggerRegisterArgs = {
  environment: 'TEST' | 'PROD' | 'DEV';
  router: Router;
  path?: string;
}

export class Swagger {
  register({ environment, router, path }: SwaggerRegisterArgs) {
    if (['TEST', 'PROD'].includes(environment)) return;

    const filepath = join(process.cwd(), 'swagger.yaml');
    const document = YAML.load(filepath);

    router.use(path ?? '/docs', serve, setup(document));
  }
}