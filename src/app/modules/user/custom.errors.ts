import { Response } from "express";

 const handleValidationErrorResponse = (res: Response, error: any) => {
    res.status(400).json({
        success: false,
        message: 'Validation error',
        error: {
            code: 400,
            description: error.details[0].message,
        },
    });
};


 const handleSuccessResponse = (res: Response, message: string, data: unknown) => {
    res.status(200).json({
        success: true,
        message,
        data,
    });
};

 const handleNotFoundResponse = (res: Response) => {
    res.status(404).json({
        success: false,
        message: 'User not found',
        error: {
            code: 404,
            description: 'User not found!',
        },
    });
};

const handleInternalServerError = (res: Response) => {
    res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: {
            code: 500,
            description: 'Internal server error',
        },
    });
};


export  const customError = {
handleInternalServerError,
handleNotFoundResponse,
handleSuccessResponse,
handleValidationErrorResponse
}