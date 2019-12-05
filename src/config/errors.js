import STRINGS from './strings';

export const errorHandler = error => {
  const code = error?.response?.status;
  switch (code) {
    case 500:
      return { status: 500, message: STRINGS.statusError.internalServerError };
    case 200:
      return { status: 200, message: STRINGS.statusError.requestSuccess };
    case 201:
      return { status: 201, message: STRINGS.statusError.createSuccess };
    case 400:
      return { status: 403, message: STRINGS.statusError.badRequest };
    case 403:
      return { status: 403, message: STRINGS.statusError.requestForbidden };
    case 404:
      return { status: 404, message: STRINGS.statusError.notFound };
    case 405:
      return { status: 405, message: STRINGS.statusError.methodNotAllowed };
    default:
      return { status: 666, message: STRINGS.statusError.default };
  }
};
