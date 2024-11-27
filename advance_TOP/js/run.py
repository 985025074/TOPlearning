import subprocess
import datetime

def run_command_multiple_times(command, times):
    """
    Run a command multiple times and record the results.

    :param command: The command to execute as a list (e.g., ['ls', '-l'])
    :param times: The number of times to run the command
    :return: A dictionary with timestamps as keys and command outputs as values
    """
    results = {}
    for i in range(times):
        try:
            # Run the command and capture output
            result = subprocess.run(command, text=True, capture_output=True, check=True)
            # Use the current timestamp as the key
            timestamp = datetime.datetime.now().isoformat()
            results[timestamp] = {
                "stdout": result.stdout.strip(),
                "stderr": result.stderr.strip(),
                "returncode": result.returncode
            }
        except subprocess.CalledProcessError as e:
            # Handle errors during command execution
            timestamp = datetime.datetime.now().isoformat()
            results[timestamp] = {
                "stdout": e.stdout.strip() if e.stdout else "",
                "stderr": e.stderr.strip() if e.stderr else f"Error: {str(e)}",
                "returncode": e.returncode
            }
    return results

if __name__ == "__main__":
    # Replace 'your_command' with the actual command you want to run
    command = ["node", "script.js"]  # Example: replace with your command
    times_to_run = 10000# Number of times to execute the command

    results_dict = run_command_multiple_times(command, times_to_run)
    anotherdic = {'1\n3\n2':0}
    for timestamp, result in results_dict.items():
        anotherdic[result['stdout']] += 1
    print(anotherdic)
    # Print the results
    # for timestamp, result in results_dict.items():
    #     print(f"Timestamp: {timestamp}")
    #     print(f"Stdout: {result['stdout']}")
    #     print(f"Stderr: {result['stderr']}")
    #     print(f"Return Code: {result['returncode']}")
    #     print("-" * 40)
