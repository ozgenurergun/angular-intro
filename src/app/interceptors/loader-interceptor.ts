import { HttpInterceptorFn } from '@angular/common/http';
import { LoaderService } from '../services/loader-service';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';

//bu bir fonksiyon. Class türü interceptorler de var.
export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoaderService);
  loadingService.setIsLoading(true);

  //RxJS pipe
  return next(req).pipe(
    finalize(() => {
      console.log("İstek bitti.")
      loadingService.setIsLoading(false);
    })
  );
};
