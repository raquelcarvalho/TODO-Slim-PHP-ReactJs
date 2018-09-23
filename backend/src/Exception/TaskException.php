<?php

namespace App\Exception;

/**
 * Task Exception.
 */
class TaskException extends BaseException
{
    const TASK_NOT_FOUND = 'A tarefa solicitada não existe.';
    const TASK_NAME_NOT_FOUND = 'Não foi encontrada tarefa com esse nome.';
    const TASK_NAME_REQUIRED = 'Nome para tarefa é obrigatório.';
    const TASK_INFO_REQUIRED = 'escreva algum dado para atualizar';
    const TASK_NAME_INVALID = 'Tarefa invalida';
    const TASK_STATUS_INVALID = 'status invalido';

    /**
     * @param string $message
     * @param int $code
     * @param \Exception $previous
     */
    public function __construct($message = '', $code = 0, \Exception $previous = null)
    {
        parent::__construct($message, $code, $previous);
    }
}
