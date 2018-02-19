import wpilib

def put_swerve_module_keys(name):
    wpilib.SmartDashboard.putNumber(name+' Position', 0)
    wpilib.SmartDashboard.putNumber(name+' Raw Position', 0)
    wpilib.SmartDashboard.putNumber(name+' CL Position', 0)
    wpilib.SmartDashboard.putNumber(name+' ADC', 0)
    wpilib.SmartDashboard.putNumber(name+' Target', 0)
    wpilib.SmartDashboard.putNumber(name+' Steer Error', 0)
    wpilib.SmartDashboard.putNumber(name+' Drive Error', 0)
    wpilib.SmartDashboard.putNumber(name+' Drive Ticks', 0)
    wpilib.SmartDashboard.putNumber(name+' Drive Velocity', 0)
    wpilib.SmartDashboard.putNumber(name+' Drive Velocity (Max)', 0)
    wpilib.SmartDashboard.putNumber(name+' Drive Percent Output', 0)
    wpilib.SmartDashboard.putNumber(name+' Drive Current', 0)
    wpilib.SmartDashboard.putNumber(name+' Steer Current', 0)

class Robot(wpilib.IterativeRobot):
    def robotInit(self):
        put_swerve_module_keys('Front Left')
        put_swerve_module_keys('Front Right')
        put_swerve_module_keys('Back Left')
        put_swerve_module_keys('Back Right')


if __name__ == '__main__':
    wpilib.run(Robot)