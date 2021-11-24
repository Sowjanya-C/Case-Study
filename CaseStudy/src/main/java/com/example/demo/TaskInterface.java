package com.example.demo;

import java.util.List;

public interface TaskInterface {
	
	public int createTask(Task task);
	public List<Task> getAllTasks();
	public int assignTask(int taskid, int userid);
	public int setPriority(int taskid, String priority);
    public int addNotes(int taskid, String notes);
    public int addBookmark(int taskid, boolean isBookmarked);
    public Task searchTask(int taskid);
    public List<Task> trackTask(String status);
}
