<?php

namespace App\Repository\Query;

/**
 * Tasks Query.
 */
abstract class TaskQuery
{
    const GET_TASK_QUERY = 'SELECT * FROM tasks WHERE id=:id';
    const GET_TASKS_QUERY = 'SELECT * FROM tasks ORDER BY id';
    const SEARCH_TASKS_QUERY = 'SELECT * FROM tasks WHERE UPPER(status) LIKE :status ORDER BY id';
    const CREATE_TASK_QUERY = 'INSERT INTO tasks (name, description, status) VALUES (:name, :description, :status)';
    const UPDATE_TASK_QUERY = 'UPDATE tasks SET name=:name, description=:description, status=:status WHERE id=:id';
    const DELETE_TASK_QUERY = 'DELETE FROM tasks WHERE id=:id';
}
