import { Controller } from '@presentation/protocols';
import { LoginController } from '@presentation/controllers';
import { makeLoginValidation, makeLogControllerDecorator, makeDbAuthentication } from '@main/factories';

export const makeLoginController = (): Controller => {
  const controller = new LoginController(makeDbAuthentication(), makeLoginValidation());
  return makeLogControllerDecorator(controller);
};
